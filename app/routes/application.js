import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
    @service intl;
    @service cookies;
    beforeModel() {
        const loc = this.cookies.read()['locale'] || 'en-us';
        this.intl.setLocale(loc);
    }
    model() {
        return Promise.all([this.store.findAll('tag'),this.store.findAll('note')]).then(([tags])=>tags);
    }
    error() {
        this.replaceWith('application');
        return true;
    }
}
