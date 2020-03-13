import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class NoteEditComponent extends Component {

    @action
    saveModel() {
        this.args.model.set('updatedAt', Date.now());
        this.args.model.save();
    }
}
