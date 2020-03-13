import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class LocalizationBarComponent extends Component {
    @service intl;
    @service cookies;
    @action setLocale(lang) {
        this.cookies.write('locale', lang);
        this.intl.setLocale(lang);
    }
}
