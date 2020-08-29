# Wildcard subdomains
## When using digitalocean, Let's Encrypt, Nginx and ExpressJs. The power of the almighty *
> This guide is intended to help you achieve the same thing, but also to keep a record for myself and thirdly to show everyone how smart I am >.< All jokes aside though, I am aware how specific this is as a use case, the hope is that if you are trying to achieve something similar you can cherrypick the bits that are relevant to your mision

### The Why and The What

I'm writing an app that allows users to publish simple html at a subdomain, either of their choosing if they pay, or at a randomly generated subdomain if they are cheap.

Original thought process was that once someone published their html from the editor, I could just automate the DNS, SSL and Nginx configurations using some bash and Node packages. The problem is that I'm lazy.

In a flash of inspiration I thought, well I could just set it up so that all subdoamins are valid, then use an HTTP req to check if there should be some HTML served at this subdomain, if so, serve it, if not display a friendly 404 message and suggest that they use the app or check the subdomain.

What follows is a list of the problems I encountered, and the solutions I employed to fix them.

### DNS

This was actually super easy, simply add an A record to the digitalocean console and take lunch.

![DNS](/images/dns.png "Screenshot from digitalocean console showing required DNS setup")

The image isn't great, but just use * as the value and you're good to go.

### SSL using Let's Encrypt

Again the eventual solution here was pretty simple, finding the solution wasn't.

```
sudo certbot certonly 
    --server https://acme-v02.api.letsencrypt.org/directory 
    --agree-tos 
    --manual 
    --preferred-challenges dns 
    -d welcomeqr.codes 
    -d *.welcomeqr.codes
```
Before Let's Encrypt a humble Frontend dev such as myself would have to go through some pain and suffering just to certify a simple site. Now it's straight forward, even for something like the subject of this blog post. In the vast majority of use cases certbot will take care of your Apache or Nginx configs, great for newbs like me, who want to spend time looking at color pallettes and monstrous NPM bundles while combing their beards and drinking artisinal craft beer. The caveat here is that for wildcard certificates you will need to write your Nginx configuration manually. 

Certbot is an excellent package provided by Let's Encrypt, honestly top notch, please donate and build statues in honour of Josh Aas, Eric Rescorla, Peter Eckersley and J. Alex Halderman.

Anyway, the mistakes I made while trying to find the certbot command above were as follows:
- Trying to add seperate certificates for the wildcard and canonical domain
- Searching the interwebs for copy paste examples of the certbot flags that I needed, when I should have just RTFM

Live and learn!

### Nginx

Next issue was getting Nginx to serve two different applications, one at the domain, the other at all subdomains. Again, not super difficult, luckily the app served when the user visits any subdomain is just comprised of static files built by vue-cli, but you could do whatever you wanted here by adding a new location block with a value of /

The codeblock below is the only nginx file for the whole site.

```nginx
server {

    index index.html index.htm index.nginx-debian.html;

    server_name welcomeqr.codes;

    expires $expires;

    location /robots.txt {
            alias /var/www/welcomeqr.codes/server/nginx/robots.txt;
    }

    location /squire/ {
            alias /var/www/welcomeqr.codes/server/squire/;
    }

    location /uploads/ {
            alias /var/www/welcomeqr.codes/server/dist/uploads/;
    }

    location / {
            proxy_pass http://localhost:1980;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-for $remote_addr;
    }

    listen 443 ssl; # This needed to be hand written
    ssl_certificate /etc/letsencrypt/live/welcomeqr.codes/fullchain.pem; # This needed to be hand written
    ssl_certificate_key /etc/letsencrypt/live/welcomeqr.codes/privkey.pem; # This needed to be hand written
    include /etc/letsencrypt/options-ssl-nginx.conf; # This needed to be hand written
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # This needed to be hand written
}

server {
    if ($host = welcomeqr.codes) {
        return 301 https://$host$request_uri;
    } # This needed to be hand written

    server_name welcomeqr.codes;
    listen 80;
    return 404; # This needed to be hand written
}

server {

    index index.html index.htm index.nginx-debian.html;

    server_name *.welcomeqr.codes;

    root /var/www/welcomeqr.codes/front-published/dist/;

    expires $expires;

    listen 443 ssl; # This needed to be hand written
    ssl_certificate /etc/letsencrypt/live/welcomeqr.codes/fullchain.pem; # This needed to be hand written
    ssl_certificate_key /etc/letsencrypt/live/welcomeqr.codes/privkey.pem; # This needed to be hand written
    include /etc/letsencrypt/options-ssl-nginx.conf; # This needed to be hand written
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # This needed to be hand written
}

server {
    if ($host = *.welcomeqr.codes) {
        return 301 https://$host$request_uri;
    } # This needed to be hand written

    server_name *.welcomeqr.codes;
    listen 80;
    return 404; # This needed to be hand written
}

```


### CORS

CORS is a hardship. I had a whitelist, a regex and `isDev` switch before I started this unit of work. Not too crazy, but far from simple and considering this is a small app which doesnt do much yet... yeah, CORS is a pain. I get it, we need it, XSS and hackers from Russia, fine, but this is my blog so I'm going to complain when I feel like it.

![CORS](/images/cors.png "Example of how most people solve the pain of CORS")
<figcaption class="blog-image-caption">I mentioned that I was working on wildcard subdomains in a Telegram chat full of friends who also happen to be super famous programmers, hence the redaction.</figcaption>

Bascially the browser isn't happy with HTTP requests being fired from a subdomain to a domain without a header named `Access-Control-Allow-Origin` which matches the origin of the request, where the origin matches the domain and the subdomain. Which is fine if you have a couple of subdomains hardcoded, but if you want the power of the *, then a little extra hackery is required.

```javascript
// Middleware - this.app = express()

this.app.use((req, res, next) => {

    // tldjs is a handy npm package, 10/10 recommended
    const tld = tldjs.parse(req.header('origin'))

    if (process.env.NODE_ENV === 'production' && tld.isValid && tld.domain === 'welcomeqr.codes' ) {

        // this is the line that does the 'heavy' lifting
        res.setHeader('Access-Control-Allow-Origin', req.header('origin'))

    }

    // other headers and things here have been ommitted becuause security and brevity

    next()
})

// expressjs CORS package
this.app.use(cors({
    origin:
        process.env.NODE_ENV !== 'production' ?
            [DEV_URL, DEV_URL_PUBLISHED, '/\.google.com\.com$/']
            : [PROD_URL, '/\.welcomeqr\.codes$/', '/\.google.com\.com$/'],
    credentials: true
}))
```
That's it for CORS really, you could do this at the Nginx level as well, but for me this made more sence and does the job well. I can hear confused screaming coming from the security nerds "But now someone can run whatever Javascript they want on a published subdomain, and everyone could die!" 

That is true, but all my endpoints are locked up with `httpOnly` cookies and JWT tokens, also all inputs are santised. I think we are safe, and that tinfoil hat looks a little silly on you.

### Conclusion

Everything is easy when you know how. I hope some of the stuff in here helps you, and if it didn't I hope you come away from this thinking about how amazing I am. Probably not on both counts, but dreams are free.

> I'm the first to admit that there could well be errors and incorrect assumptions contained in the words and examples above, if you find any and feel strongly about them, reach out to me on GitHub I would appreciate any and all feedback, both negative and positive.