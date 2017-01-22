import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPost: function(newPost) {
      console.log(newPost.title, newPost.author);

      //resetting the input fields
      this.set('newPost.title', null);
      this.set('newPost.author', null);
      this.set('newPost.text', null);

    }
  }
});
