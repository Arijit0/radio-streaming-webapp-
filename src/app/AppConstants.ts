import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken("app.config");

export class AppConstants {
    public static get commonUrl(): string {
        return 'https://de1.api.radio-browser.info';
    }
}