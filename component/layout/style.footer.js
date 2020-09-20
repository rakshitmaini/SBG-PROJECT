import styled from "styled-components";

export default styled.div`

.footer {
    padding: 50px 0 20px 0;
    background-color: #090c14;
    color: #878c94;

    .title{
	text-align: left;
	color:#fff;
	font-size:25px;
    }
    .acount-icon{
        ul{
            margin-left:0px;
            padding-left:0px;
            i::before{
                margin-right:1rem;
            }
            i{
	display:block;
	color:#fff;
	font-size:21px;
	padding: 7px 7px 7px 0px;
	text-decoration:none;
    }
        }
        
    .fa{
	margin-right:25px;
    }
    }
    .category{
        ul {
            margin-left:0px;
            padding-left:0px;
            a {
    text-decoration: none;
    color: #fff;
    display: inline-block;
    padding: 5px 20px;
    margin: 3px;
    border-radius:4px;
    margin-top: 6px;
    background-color: black;
    border: solid 1px #fff;
}
        }
        
        
    }
    .payment{
	margin:0px;
	padding:0px;
	list-style-type:none;
    li{
	list-style-type:none;
    a {
    text-decoration: none;
    display: inline-block;
    color: #fff;
    float: left;
    font-size: 25px;
    padding: 10px 10px;
}
}
}
    .social-icon{
	padding:0px;
	margin:0px;

    i{
	display:inline-block;
	color:#fff;
	font-size:25px;
	padding-right:5px;
    }
    }
    .text-center{
        display:block;
        text-align:center;
    }
    hr{
        border-top: 2px solid #e9ecef;
    }
    .logo-img{
        width: 200px;
        margin-bottom:1rem;
    }
}
@media (max-width: 480px) {
    .footer {
        
        .logo-img{
        width: 200px;
        margin-bottom:1rem;
    }
    .social-icon{
	
        margin-bottom:1rem;
    i{
	display:inline-block;
	color:#fff;
	font-size:25px;
	padding-right:17px;
    }
    }
    .category ul{
        margin-bottom:1rem;
    }

  }
`;
