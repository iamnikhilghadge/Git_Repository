/**
 * Created by Iternia2 on 03-Mar-15.
 */

$(document).ready(function()
{
    $("#b1d1").click(function() {

        if (($('#plus1').text()) == " + ")
        {

        $('#plus1').text(" - ");
        }
        else
        {
            $('#plus1').text(" + ");

        }
        $("#bd1").slideToggle(2000);

    });



    $("#b1d2").click(function()
    {
        if (($('#plus2').text()) == " + ")
        {

            $('#plus2').text(" - ");
        }
        else
        {
            $('#plus2').text(" + ");

        }


        $("#bd2").slideToggle(2000);

    });


    $("#b1d3").click(function()
    {


        if (($('#plus3').text()) == " + ")
        {

            $('#plus3').text(" - ");
        }
        else
        {
            $('#plus3').text(" + ");

        }
        $("#bd3").slideToggle(2000);

    });


    $("#b1d4").click(function()
    {

        if (($('#plus4').text()) == " + ")
        {

            $('#plus4').text(" - ");
        }
        else
        {
            $('#plus4').text(" + ");

        }
        $("#bd4").slideToggle(2000);

    });

    $("#b1d5").click(function()
    {

        if (($('#plus5').text()) == " + ")
        {

            $('#plus5').text(" - ");
        }
        else
        {
            $('#plus5').text(" + ");

        }
        $("#bd5").slideToggle(2000);

    });


});




