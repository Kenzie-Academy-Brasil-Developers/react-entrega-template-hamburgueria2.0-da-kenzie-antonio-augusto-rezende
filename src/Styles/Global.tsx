import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

:root{

--color-background: #000000;
--color-primary: #27AE60;
--color-second: #EB5757;
--color-gray-0: #F5F5F5;
--color-gray-100: #E0E0E0;
--color-gray-300: #828282;
--color-gray-600: #333333;
--color-success: #168821;
--color-negative: #E60000;  
--color-warning: #FFCD07;  
--color-information: #155BCB;  
--color-opacity : #12121480;

}

* {
margin:0;
padding: 0;
outline:0;
box-sizing: border-box;
}
#root{
height: 100vh;
}
body, html{
width: 100vw;
height: 100vh;
}


body, input, button, textarea {
font-family: 'Inter', sans-serif;
}
button{
cursor: pointer;
}
a{
text-decoration: none;
}
li{
list-style: none;
}
`;
