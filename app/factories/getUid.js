app.factory("getUid", function() {
  var bucket = '';

  return {
    addUid: function(value) {
      bucket = value;
      console.log("uidBucket :", bucket);
      return bucket;
    },
    getUid: function() {
      console.log("uidBucket :", bucket);
      return bucket;
    }
  };
});