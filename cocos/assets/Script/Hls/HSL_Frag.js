module.exports =
`
#ifdef GL_ES  
precision mediump float;  
#endif  
  
varying vec2 v_texCoord;  
uniform float u_dH;  
uniform float u_dS;  
uniform float u_dL;  
  
void main() {  

    vec4 texColor=texture2D(CC_Texture0, v_texCoord).rgba;
    float r=texColor.r;
    float g=texColor.g;
    float b=texColor.b;
    float a=texColor.a;
    float h;  
    float s;  
    float l;  
    {  
        float max=max(max(r,g),b);  
        float min=min(min(r,g),b);  

        if(max==min){  
  
            h=0.0;  
        }else if(max==r&&g>=b){  
            h=60.0*(g-b)/(max-min)+0.0;  
        }else if(max==r&&g<b){  
            h=60.0*(g-b)/(max-min)+360.0;  
        }else if(max==g){  
            h=60.0*(b-r)/(max-min)+120.0;  
        }else if(max==b){  
            h=60.0*(r-g)/(max-min)+240.0;  
        }  

        l=0.5*(max+min);  

        if(l==0.0||max==min){  
            s=0.0;  
        }else if(0.0<=l&&l<=0.5){  
            s=(max-min)/(2.0*l);  
        }else if(l>0.5){  
            s=(max-min)/(2.0-2.0*l);  
        }  
    }  

    h=h+u_dH;  
    s=min(1.0,max(0.0,s+u_dS));  


    vec4 finalColor;  
    {  
        float q;  
        if(l<0.5){  
            q=l*(1.0+s);  
        }else if(l>=0.5){  
            q=l+s-l*s;  
        }  
        float p=2.0*l-q;  
        float hk=h/360.0;  
        float t[3];  
        t[0]=hk+1.0/3.0;t[1]=hk;t[2]=hk-1.0/3.0;  
        for(int i=0;i<3;i++){  
            if(t[i]<0.0)t[i]+=1.0;  
            if(t[i]>1.0)t[i]-=1.0;  
        }
        float c[3];  
        for(int i=0;i<3;i++){  
            if(t[i]<1.0/6.0){  
                c[i]=p+((q-p)*6.0*t[i]);  
            }else if(1.0/6.0<=t[i]&&t[i]<0.5){  
                c[i]=q;  
            }else if(0.5<=t[i]&&t[i]<2.0/3.0){  
                c[i]=p+((q-p)*6.0*(2.0/3.0-t[i]));  
            }else{  
                c[i]=p;  
            }  
        }  
        finalColor=vec4(c[0],c[1],c[2],a);  
    }  
  
    finalColor+=vec4(u_dL,u_dL,u_dL,0.0);  
  
    gl_FragColor=finalColor;  
  
}  
`