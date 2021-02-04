
            function validateForm()
        {
           var fn=document.forms["regform"]["firstname"].value;
           var ln=document.forms["regform"]["lastname"].value;
           var gn=document.forms["regform"]["gender"].value;
           var loc=document.forms["regform"]["location"].value;
        
        if(fn==null||fn==" ")
        {
            alert("First name cannot be blank");
            
            
        }else if(ln==null||ln==" ")
        {
            alert("last name cannot be blank");
            
        }else if((gn[0].checked==false)&&(gn[1].checked==false))
        {
            alert("Select gender");
            
        }else if(loc.selectedIndex==0)
        {
            alert ("Enter your Country");
            return false;
        }
    }
    
        