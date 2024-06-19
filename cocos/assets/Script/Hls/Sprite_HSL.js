var _vert = require("./HSL_Vert");
var _frag = require("./HSL_Frag");

var SpriteHSL = cc.Class({
    extends: cc.Component,

    properties: {
        dH: {
            default: 0,
            type: cc.Integer,
            range: [0, 360, 1],
            slide: true
        },
        dS: {
            default: 0,
            type: cc.Integer,
            range: [-1, 1, 0.01],
            slide: true
        },
        dL: {
            default: 0,
            type: cc.Integer,
            range: [-1, 1, 0.01],
            slide: true
        },
        // affectChildren: {
        //     default: true,
        //     notify: function () {

        //     }
        // },
        previewId: {
            default: null,
            editorOnly: true,
            visible: false
        },
        _program: {
            default: null,
            visible: false
        }
    },

    onLoad: function () {
        this.render(this.dH,this.dS,this.dL,false);
    },

    editor: {
        requireComponent: cc.Sprite,
        executeInEditMode: true
    },

    onFocusInEditor: function () {
        if (this.previewId != null)
            clearInterval(this.previewId);
        var self = this;
        this.previewId = setInterval(function () {
            self.render(self.dH,self.dS,self.dL,false);
        }, 1 / 60);
    },

    onLostFocusInEditor: function () {
        if (this.previewId != null)
            clearInterval(this.previewId);
    },

    onDestroy: function () {
        if (this.previewId != null)
            clearInterval(this.previewId);
        this.dH = this.dL = this.dS = 0;
        this.render(this.dH,this.dS,this.dL,false);
    },

    render: function (h,s,l,enforce) {
        if (!this._program)
            this._program = new cc.GLProgram();
        if (cc.sys.isNative) {
            this._program.initWithString(_vert, _frag);
            this._program.link();
            this._program.updateUniforms();
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(this._program);
            glProgram_state.setUniformFloat("u_dH", h);
            glProgram_state.setUniformFloat("u_dS", s);
            glProgram_state.setUniformFloat("u_dL", l);
        } else {
            this._program.initWithVertexShaderByteArray(_vert, _frag);
            this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION, cc.macro.VERTEX_ATTRIB_POSITION);
            this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR, cc.macro.VERTEX_ATTRIB_COLOR);
            this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD, cc.macro.VERTEX_ATTRIB_TEX_COORDS);
            this._program.link();
            this._program.updateUniforms();
            this._program.setUniformLocationWith1f(this._program.getUniformLocationForName("u_dH"), h);
            this._program.setUniformLocationWith1f(this._program.getUniformLocationForName("u_dS"), s);
            this._program.setUniformLocationWith1f(this._program.getUniformLocationForName("u_dL"), l);
        }
        this.setProgram(this.node._sgNode, this._program, enforce);
    },

    setProgram: function (node, program, enforce) {

        if (cc.sys.isNative) {
            var glProgram_state = cc.GLProgramState.getOrCreateWithGLProgram(program);
            node.setGLProgramState(glProgram_state);
        } else {
            node.setShaderProgram(program);
        }

        var children = node.children;
        if (!children)
            return;
        for (var i = 0; i < children.length; i++) {
            this.setProgram(children[i], program);
        }
    }
});