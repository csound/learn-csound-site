/*
 * C S O U N D
 *
 * L I C E N S E
 *
 * This software is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
 */

require.config({
	shim : {
		//"bootstrap" : { "deps" :['jquery']  },
		"libcsound":"libcsound"

	},
	paths: {
		ace: "ace",
		"jquery" : "jquery",
		//"bootstrap" :  "bootstrap.min" ,
		"libcsound":"libcsound"	
	}
});

require(["jquery", "libcsound", "csound-lessons"], main);

function main() {

  var CsoundLessons = require('csound-lessons');

	Module['noExitRuntime'] = true;

	Module['_main'] = function() {

		const csound = new CsoundObj();

		var allowedFileExtensions = ["csd", "wav", "orc"];

    var lessons = new CsoundLessons();
    lessons.loadLesson("./lessons/pieces/trapped/trapped.csd", "./lessons/pieces/trapped/trapped.html");

	};
};

