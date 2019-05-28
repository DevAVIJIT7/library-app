import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({

  model() {
    return hash({
      book: this.store.createRecord('book'),
      authors: this.store.findAll('author'),
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new Book');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('books/form');
  },

  actions: {

    saveAuthor(newBook) {
        newBook.save().then(() => this.transitionTo('books'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
