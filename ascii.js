  document.addEventListener("keydown", function (event) {
      if (event.altKey) {
          alert("ASCII: " + event.keyCode + " alt key");
      } else if (event.shiftKey) {
          alert("ASCII: " + event.keyCode + " shift key");
      } else if (event.ctrlKey) {
          alert("ASCII: " + event.keyCode + " ctrl key");
      } else {
          alert("ASCII: " + event.keyCode);
      }
  });
