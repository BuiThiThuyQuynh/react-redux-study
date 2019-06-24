const ACTIONS = {
  INCREMENT: {
    TYPE: 'INCREMENT',
    action() {
      return { type: this.TYPE };
    }
  }, 
  DECREMENT: {
    TYPE: 'DECREMENT',
    action() {
      return { type: this.TYPE };
    }
  }
}

export default ACTIONS;