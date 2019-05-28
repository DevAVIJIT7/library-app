import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.createRecord('author');
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Author');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('authors/form');
  },

  actions: {

    saveAuthor(newAuthor) {
        newAuthor.save().then(() => this.transitionTo('authors'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
