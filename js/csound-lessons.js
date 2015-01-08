
function loadLesson(lessonCsd, lessonText) {
      var editor = ace.edit("editor");
      editor.setTheme("ace/theme/monokai");
      editor.getSession().setMode("ace/mode/csound"); 

      //alert(lessonText);
      $("#lessonText").load(lessonText);

      var client = new XMLHttpRequest();
      client.open('GET', lessonCsd, true);
      client.onreadystatechange = function() {
          editor.setValue(client.responseText);
          editor.moveCursorTo(0,0);
      }
      client.send();
}


