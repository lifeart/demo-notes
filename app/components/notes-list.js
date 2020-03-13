import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class NotesListComponent extends Component {
    @tracked searchString = '';
    @action
    removeNote(model) {
        model.destroyRecord();
    }
    get results() {
        if (!this.searchString) {
            return this.args.tag.notes;
        }
        return this.args.tag.notes.filter(({text})=>text.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase()));
    }
}
