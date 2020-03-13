import Model, {attr, belongsTo } from '@ember-data/model';
export default class NoteModel extends Model {
    @attr('string')
    text;
    @belongsTo('tag', {async:false})
    parent;
    @attr('number', {defaultValue() { return Date.now() }})
    updatedAt;
}
