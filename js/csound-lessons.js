
define("csound-lessons", ["ace/ace", "FileManager"], function(ace, fileManager) {

  function CsoundLessons(fileManager) {
    
    const editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/csound"); 
    editor.$blockScrolling = Infinity;

    const csoundObj = new CsoundObj();
    const currentFilePath = "/temp.csd";

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
      fileManager.writeStringToFile(currentFilePath,
          editorText);
      csoundObj.compileCSD(currentFilePath);
    }

    this.csPerform = function() {
      csoundObj.start();
    }

    this.csRender = function () {
      csoundObj.render(this.currentFilePath);
    }

    this.csReset = function() {
      csoundObj.reset();
    }

    $("#CompileButton").click(this.csCompile);
    $("#PerformButton").click(this.csPerform);
    $("#RenderButton").click(this.csRender);
    $("#ResetButton").click(this.csReset);

    }

    return CsoundLessons;
  });

