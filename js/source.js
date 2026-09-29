$(function () {

    let revenueAmt = "$48,250";
    let customerNum = "1,284";
    let ordersAmt = "342";
    let issuesAmt = "12";
    let username = "UTRGV Vaqueros";
    let notifAmt = 3;

    const customers = [
        {
            "name": "Alice Johnson",
            "email": "alice@example.com",
            "status": "Active",
            "joined": "09/10/2026"
        },
        {
            "name": "Robert Smith",
            "email": "robert@example.com",
            "status": "Pending",
            "joined": "09/12/2026"
        },
        {
            "name": "Maria Garcia",
            "email": "maria@example.com",
            "status": "Active",
            "joined": "09/15/2026"
        }
    ];

    const sales = [
        {
            "product": "Product A",
            "quantity": "124",
            "revenue": "$12,400"
        },
        {
            "product": "Product B",
            "quantity": "98",
            "revenue": "$9,800"
        },
        {
            "product": "Product C",
            "quantity": "75",
            "revenue": "$7,500"
        },
    ];

    const activities = [
        {
            "message" : "New customer registered"
        },
        {
            "message" : "Order #10482 completed"
        },
        {
            "message" : "Payment received"
        },
        {
            "message" : "Support ticket created"
        }
    ];

    const messages = [
        {
            "messsage" : "All systems operational"
        },
        {
            "messsage" : "All settings loaded for this system"
        }
    ];

    const notifications = [
        {
            "messsage": "A new shipment is expected to arrive on Sep 30, 2026"
        },
        {
            "messsage": "There are 12 outstanding issues with last week's orders"
        },
        {
            "messsage": "Three new customers joined our platform in the last month"
        },
    ];

    const tasks = [
       {
            "messsage": "Review orders"
        },
        {
            "messsage": "Contact customer"
        },
        {
            "messsage": "Generate report"
        },
    ]


    // *********************************************************************
    // Do not modify the JS objects above. You will write your code below.
    // *********************************************************************

    //Selecting the text from above and adding it into the html's id's

    //$("{text from above}").text({html id})
    $(".revenue-amt").text(revenueAmt);
    $("#customer-num").text(customerNum);
    $("#orders-amt").text(ordersAmt);
    $("#issues-amt").text(issuesAmt);
    $("#username").text(username);
    $("#notification-num").text(notifAmt);

    //Declaring variables
    var customerlist, saleslist, activitieslist, messageslist, notiflist, tasklist  

    //Grabbing all the id's from html and assigning each to their respective var
    saleslist = $("#salesTableBody")
    customerlist = $("#customerTableBody")
    activitieslist = $("#activity-list")
    messageslist = $("#system-status-list")
    notiflist = $("#notifications-list")
    tasklist = $("#tasks-list")

    $("button").button();
    $("#dashboardTabs").tabs();
    $("#customerDialog").dialog({
        autoOpen: false, 
        modal: true, 
        width: 450, 
        buttons: { 
            "Create Customer": function () { 
                var name = $("#customerName").val(); 
                var email = $("#customerEmail").val(); 
                if (!name || !email) { 
                    alert( 
                        "Please enter a name and email." 
                    ); 
                    return; 
                } 
 
                alert("Customer created: " + name); 
                $(this).dialog("close"); 
            }, 
            "Cancel": function () { 
                $(this).dialog("close"); 
            } 
        }
    });

    $("#accordion").accordion({
        collapsible: true, 
        heightStyle: "content" 
    });
    
    $("#newCustomerButton").click(function(){
        $("#customerDialog").dialog("open");
    });

    $( "#customerDate" ).datepicker({
        altField: "#actualDate"
    });

    function customerbuild(){
        customers.forEach(customers =>{
            customerlist.append(
                `<tr>
                    <td>${customers.name}</td>
                    <td>${customers.email}</td>
                    <td>${customers.status}</td>
                    <td>${customers.joined}</td>
                </tr>`
            );
        })
    }
customerbuild();
    
    function salesbuild(){
        sales.forEach(sales => {
            saleslist.append(
                `<tr>
                    <td>${sales.product}</td>
                    <td>${sales.quantity}</td>
                    <td>${sales.revenue}</td>
                </tr>
                `
            );
        })
    }
salesbuild();

    function activitybuild(){
        activities.forEach(activities => {
            activitieslist.append(
                `
                <li>${activities.message}</li>
                `
            );
        })
    }
activitybuild();

function messagebuild(){
    messages.forEach(messages => {
        messageslist.append(
            `<li>${messages.messsage}</li>
            `
        );
    })
}
messagebuild();

function notifbuild(){
    notifications.forEach(notifications => {
        notiflist.append(
            `<li>${notifications.messsage}</li>`
        );
    })
}
notifbuild();

function taskbuild(){
    tasks.forEach(tasks => {
        tasklist.append(
            `<li>${tasks.messsage}</li>`
        );
    })
}
taskbuild();


    });