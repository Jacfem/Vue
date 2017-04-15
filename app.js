new Vue({
  el: "#events",

  // Register data here
  data: {
    event: {name: '', description: '', date: ''},
    events: []
  },

  // What runs when the app loads
  mounted: function() {
    this.fetchEvents();
  },

  // Register methods here
  methods: {
    fetchEvents: function() {
      var events = [
        {
          id: 1,
          name: 'TFF',
          description: 'Tribeca Film Festival',
          date: '2016-04-19'
        },
        {
          id: 2,
          name: 'Bonnaroo',
          description: 'Bonnaroo Music Festival',
          date: '2016-06-08'
        }
      ];
      this.events = events;
    },

    addEvent: function() {
      if(this.event.name) {
        this.events.push(this.event);
        this.event = {name: '', description: '', date: ''}
      }
    },

    deleteEvent: function(index) {
      if(confirm("Are you sure you want to delete this event?")) {
        this.events.splice(index, 1);
      }
    }
  }
});
