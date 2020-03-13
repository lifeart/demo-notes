import Route from '@ember/routing/route';

export default class TagNoteRoute extends Route {
    async model(params, transition) {
        try {
            const result = await super.model(params, transition);
            return result;
        } catch(e) {
            return null;
        }
    }
    redirect(model) {
        if (model === null) {
            this.replaceWith('application');
        }
    }
}
