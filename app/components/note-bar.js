import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class NoteBarComponent extends Component {
    @service store;
    @service router;
    @tracked noteText = '';
    @action addNote(e) {
        e.preventDefault();
        const record = this.store.createRecord('note', {
            text: this.noteText,
            parent: this.args.tag
        });
        record.save(result=>result.parent.save());
        this.noteText = '';
        this.router.transitionTo('tag.note', record.parent, record);
    }
}
