# etch-a-sketch

<!-- 
    &nbsp; => For tabs/spaces
    \ => Line break
-->

createGird:
&nbsp;&nbsp;SET grid-container equal to nothing (clear grid) \
&nbsp;&nbsp;IF user input is undefined OR less than 0 OR greater than 100 \
&nbsp;&nbsp;&nbsp;&nbsp;SET grid dimension to 16x16 \
&nbsp;&nbsp;ELSE \
&nbsp;&nbsp;&nbsp;&nbsp;SET grid dimension to user input \
&nbsp;&nbsp;END IF \
&nbsp;&nbsp;WHILE divCounter is less than grid dimension
&nbsp;&nbsp;&nbsp;&nbsp;CREATE div
&nbsp;&nbsp;&nbsp;&nbsp;ADD event to change background color on hover
&nbsp;&nbsp;&nbsp;&nbsp;ADD div to grid-container
&nbsp;&nbsp;END WHILE




