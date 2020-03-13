import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class TagsListComponent extends Component {
    @action
    removeTag(model) {
        model.destroyRecord();
    }
}
