/*
* File Name / glitteringSea.js
* Created Date / Aug 14, 2020
* Aurhor / Toshiya Marukubo
* Twitter / https://twitter.com/toshiyamarukubo
*/
const makeRain = (ref) => {
  console.log(ref + 'first')

    'use strict';
    window.addEventListener('click', function () {
      const canvas = ref.current;
      console.log(canvas)
      console.log('boing') // boing boing
  
      if (!canvas || !canvas.getContext) {
        return false;
      }

      /********************
        Random Number
      ********************/
  
      function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
      
      /********************
        Var
      ********************/
  
      const ctx = canvas.getContext('2d');
      const X = canvas.width = window.innerWidth;
      const Y = canvas.height = window.innerHeight;
      const mouseX = null;
      const mouseY = null;
      const shapeNum = 300;
      const shapes = [];
      const style = {
        black: 'black',
        white: 'white',
        lineWidth: 4,
      };
  
      /********************
        Animation
      ********************/
  
      window.requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function(cb) {
          setTimeout(cb, 17);
        };
  
      /********************
        Shape
      ********************/
       
      function Shape(ctx, x, y) {
        this.ctx = ctx;
        this.init(x, y);
      }
      
      Shape.prototype.init = function(x, y) {
        this.x = x;
        this.y = y;
        this.r = rand(10, 25);
        this.ga = Math.random() * Math.random() * Math.random() * Math.random();
        this.v = {
          x: Math.random(),
          y: -1
        };
        this.l = rand(0, 20);
        this.sl = this.l;
      };
  
      Shape.prototype.updateParams = function() {
        var ratio = this.l / this.sl;
        //this.r *= ratio;
        this.l -= 1;
        if (this.l < 0) {
          this.init(X * (Math.random() + Math.random()) / 2, rand(0, Y));
        }
      };
  
      Shape.prototype.updatePosition = function() {
        this.x += Math.random();
        this.y += -Math.random();
      };
      
      Shape.prototype.draw = function() {
        var ctx  = this.ctx;
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.globalAlpha = this.ga;
        //ctx.fillStyle = 'rgb(123, 252, 100)';
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.restore();
      };
  
      Shape.prototype.render = function(i) {
        this.updatePosition();
        this.updateParams();
        this.draw();
      };
  
      for (var i = 0; i < shapeNum; i++) {
        var s = new Shape(ctx, X * (Math.random() + Math.random()) / 2, rand(0, Y));
        shapes.push(s);
      }
  
      /********************
        Render
      ********************/
      
      function render() {
        ctx.clearRect(0, 0, X, Y);
        for (var i = 0; i < shapes.length; i++) {
          shapes[i].render(i);
        }
        requestAnimationFrame(render);
      }
  
      render();
  
        // Event
      // ********************
      
      function onResize() {
        X = canvas.width = window.innerWidth;
        Y = canvas.height = window.innerHeight;
      }
  
      window.addEventListener('resize', function() {
        onResize();
      });
  
      window.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }, false);
  
    });
  };

  export {makeRain}