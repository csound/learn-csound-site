
define("csound-lessons", ["ace/ace"], function(ace) {

  function CsoundLessons() {
    
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/csound"); 

    const CSOUND_OBJ = new CsoundObj();

    this.loadLesson = function(lessonCsd, lessonText) {
          $("#lessonText").load(lessonText);

          var client = new XMLHttpRequest();
          client.open('GET', lessonCsd, true);
          client.onreadystatechange = function() {
              editor.setValue(client.responseText);
              editor.moveCursorTo(0,0);
          }
          client.send();
    }

    this.csCompile = function() {
      var editorText = editor.getValue();
      alert(editorText);
    }


    this.csPerform = function() {

    }


    this.csRender = function () {

    }

    this.csReset = function() {

    }


    $("#CompileButton").click(this.csCompile);
    $("#PerformButton").click(this.csPerform);
    $("#RenderButton").click(this.csRender);
    $("#ResetButton").click(this.csReset);

    }

    return CsoundLessons;
  });

