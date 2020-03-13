import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class NoteBarComponent extends Component {
    @service store;
    @tracked noteText = '';
    @action addNote() {
        this.store.createRecord('note', {
            text: this.noteText,
            parent: this.args.tag
        }).save();
        this.noteText = '';
    }
}
