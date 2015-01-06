define(function(require, exports, module) {
	"use strict";

	var oop = require("../lib/oop");
	var TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;
	var CsoundHighlightRules = function() {

		var keywords = "instr|endin|opcode|endop";

		var builtinConstants = (
			"true|false|null"
		);
		
		var opcodes = (
			"vco2|oscili|chnget|outs"
		);

		var keywordMapper = this.createKeywordMapper({
			"support.function": opcodes,
			"keyword": keywords,
			"constant.language": builtinConstants
		}, "identifier");

		this.$rules = {
			"start" : [ {
			    
				token : "meta.tag",
				regex : "</?([A-Za-z])\\w+>"
			}, {			    
				token : "constant.language",
				regex : "\\b0dbfs|nchnls|kr|ksmps|sr|rtmidi|rtaudio|-o|dac|msg_color|-d\\b"
			}, {
				token : "comment",
				regex : ";.*$"
			}, {
				token : ['keyword', 'text', 'string'],           // " string
				regex : "(instr)(\\s)([^]+)"
			}, {
			    token : "string",           // " string
				regex : '".*?"'
			}, {
				token : "string",           // ' string
				regex : "'.*?'"
			}, {
				token : "constant.numeric", // float
				regex : "[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"
			}, {
				token : keywordMapper,
				regex : "[a-zA-Z_$][a-zA-Z0-9_$]*\\b"
			}, {
				token : "keyword.operator",
				regex : "\\+|\\-|\\/|\\/\\/|%|<@>|@>|<@|&|\\^|~|<|>|<=|=>|==|!=|<>|="
			}, {
				token : "paren.lparen",
				regex : "[\\(]"
			}, {
				token : "paren.rparen",
				regex : "[\\)]"
			}]
		};
	};

	oop.inherits(CsoundHighlightRules, TextHighlightRules);

	exports.CsoundHighlightRules = CsoundHighlightRules;
});

