import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class TagBarComponent extends Component {
    @service store;
    @tracked tagName = '';
    @action addTag() {
        this.store.createRecord('tag', {
            name: this.tagName
        }).save();
        this.tagName = '';
    }
}
