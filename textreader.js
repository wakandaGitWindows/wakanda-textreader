var TextReader = function TextReader(file, encoding){	
	this.file       = file;
	this.encoding   = encoding;
	this.charLength = this.getCharLength(encoding);
	this.buffer     = file.toBuffer();
	this.position   = 0;
	this.size       = this.buffer.length;
	this.length     = this.size / this.charLength; 
};

TextReader.prototype.getCharLength = function(encoding){
	var _char  = 'a';
	var buffer = new Buffer(_char, encoding);
	
	return buffer.length;
};

TextReader.prototype.readChar = function(){

	var _char    = this.readFromTo(this.position, this.position+1);
	
	this.position++;
	
	return _char;
};

TextReader.prototype.readFromTo = function(from, to){
	
	if(!to){
		to = this.length;
	}
	
	var startPos = this.charPosToBufferPos(from);
	var endPos   = this.charPosToBufferPos(to);	
	var buffer   = this.buffer.slice(startPos, endPos);
	var str      = buffer.toString(this.encoding);
	
	return str;
};

TextReader.prototype.read = function(){
	
	var str = this.readFromTo(this.position);
	
	this.position = this.length;
	
	return str;
};

TextReader.prototype.setPosition = function(position){
	
	this.position = position;
	
};

TextReader.prototype.charPosToBufferPos = function(position){
	var bufferPos = position * this.charLength;
	
	return bufferPos;
};

module.exports = TextReader;