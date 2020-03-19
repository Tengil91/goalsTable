import {Inject, Injectable} from '@angular/core';

class StoredCookie {
    constructor(
        public readonly name: string,
        public readonly value: string) {
            this.name = decodeURIComponent(name);
            this.value = decodeURIComponent(value);
    }
}

class Cookie {
    constructor(
        public readonly name: string,
        public readonly value: string,
        public readonly expireDays: number,
        public domain: string = '') {
            this.name = encodeURIComponent(name);
            this.value = encodeURIComponent(value);
    }

    public toCookieString(): string {
        // Expires string
        const endDate: Date = new Date();
        endDate.setTime(endDate.getTime() + this.expireDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${endDate.toUTCString()}`;
        // Cookie
        let cookieString = `${this.name}=${this.value}; ${expires}`;
        // Domain
        if (this.domain) {
            cookieString += `; domain=${this.domain}`;
        }
        cookieString += '; path=/';
        return cookieString;
    }

    toStoredCookie(): StoredCookie {
        return new StoredCookie(this.name, this.value);
    }
}

@Injectable({
providedIn: 'root'
})
export class CookieService {

    constructor() { }

    // Checks the existence of a single cookie by it's name
    public exists(name: string): boolean {
        return this.readAllCookies().find(c => c.name === name) != null;
    }

    // Retrieves a single cookie by it's name, returns undefined if does not exist
    public getTypedValue<TValue>(name: string): TValue | undefined {
        const all = this.readAllCookies();
        const cookie = all.find(c => c.name === name);
        if (cookie === undefined) {
            return undefined;
        }
        try {
            return JSON.parse(cookie.value);
        } catch (e) {
            console.log(`"${cookie.value}" is not a valid JSON. If it's a string, use getStringValue method instead.`);
        }
    }

    public getStringValue(name: string): string | undefined {
        const all = this.readAllCookies();
        const cookie = all.find(c => c.name === name);
        if (cookie === undefined) {
            return undefined;
        }
        return cookie.value;
    }

    public delete(name: string, domain?: string): void {
        // Setting a date before current day will remove the cookie
        const deleteCookie = new Cookie(name, '', -1, domain);
        document.cookie = deleteCookie.toCookieString();
        console.log(`Deleted cookie "${name}" (via setting ${deleteCookie.toCookieString()})`);
    }

    // Save the cookie
    public set<TValue>(name: string, value: TValue, expireDays: number, onRootHost: boolean = false): void {
        let stringValue: string;
        if (!(typeof value === 'string' || value instanceof String)) {
            stringValue = JSON.stringify(value);
        } else {
            stringValue = value.toString();
        }
        const newCookie = new Cookie(name, stringValue, expireDays);
        if (onRootHost) {
            newCookie.domain = this.getRootHostName();
        }

        // Update browser cookies
        document.cookie = newCookie.toCookieString();

        console.log('Set cookie ', newCookie, newCookie.toCookieString());
    }


    // Parses all cookies and returns the cookie array
    private readAllCookies(): Array<StoredCookie> {
        const result = new Array<StoredCookie>();
        if (!document.cookie || document.cookie === '') {
            return result;
        }
        const split = document.cookie.split(';');
        for (const s of split) {
            const currCookie = s.split('=');
            currCookie[0] = currCookie[0].replace(/^ /, '');
            const cookie = new StoredCookie(currCookie[0], currCookie[1]);
            result.push(cookie);
        }
        return result;
    }

    public getRootHostName() {
        if (document.domain.length) {
            const parts = document.domain.replace(/^(www\.)/, '').split('.');
            // Is there a subdomain?
            while (parts.length > 2) {
                // Remove it from our array
                parts.shift();
            }
            // Getting the remaining 2 elements
            const domain = parts.join('.');
            return domain.replace(/(^\.*)|(\.*$)/g, '');
        }
        console.log('Current domain could not be read');
        return '';
    }
}
