Beautiful & free dashboard to use with [Healthchecks.io](https://healthchecks.io). 
An easy way to see all your checks at a glance in real time, works great on desktop and mobile.

![Promo](https://raw.githubusercontent.com/nicoandrade/healthchecks-front/main/public/promo.jpg "Promo")


## Deploy on Vercel for free

This is a [Next.js](https://nextjs.org) app, so it is recommended to deploy it on [Vercel](https://vercel.com) but you can use any host that supports Next.js.
All you have to do is click on the **Deploy** button below and then fill the Enviroment Variables with your API key and an optional site's name.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fnicoandrade%2Fhealthchecks-front&env=NEXT_PUBLIC_APIKEY,NEXT_PUBLIC_NAME&envDescription=API%20Key%20from%20your%20healthchecks.io%20project&envLink=https%3A%2F%2Fgithub.com%2Fnicoandrade%2Fhealthchecks-front%23where-is-my-api-key&project-name=healthchecks-dashboard&repo-name=healthchecks-dashboard)


### Where is my API Key?
Log in on [Healthchecks.io](https://healthchecks.io), go to the project you want to use, click on **Settings** and there you will find the **API Access** section:

![API Key](https://raw.githubusercontent.com/nicoandrade/healthchecks-front/main/public/apikey.png "API Key")

Always use the **read-only** API key.


### Security
If you decide to make your dashboard public, your read-only API key will become public as well. Using the read-only API key, anybody can fetch basic information about checks in your project. This includes, for each check:

* name, tags and description (even though tags and descriptions are currently not being shown on the dashboard)
* check's schedule (period, grace time, cron expression + timezone)
* current status (new / up / down / paused)
* precise time of the last ping
* precise time of when the next ping is expected
* total number of pings the check has received

Here are the things that the read-only API keys cannot do:

* the ping URLs are not exposed. You are not risking unexpected pings from random visitors
* no write access: cannot update or delete the existing checks, cannot create new checks in your project

---

Created by [@NicoAndrade](https://nicoandrade.com)