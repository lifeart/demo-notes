import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class TagBarComponent extends Component {
    @service store;
    @service router;
    @tracked tagName = '';
    @action addTag(e) {
        e.preventDefault();
        let record = this.store.createRecord('tag', {
            name: this.tagName
        });
        record.save();
        this.tagName = '';
        this.router.transitionTo('tag', record);
    }
}
