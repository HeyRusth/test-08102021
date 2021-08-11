(function (window, document, $, undefined) {
    var metitoApp = {
       
        backgroundImage: function () {
            var isRTL = $('html').attr('lang') == 'en' ? false : true;
            var $windowWidth = $(window).innerWidth();
            if ($windowWidth < 600) {
                $(".background-banner-wrapper").each(function () {
                    if ($(this).data('mob')) {
                        var dataImage = $(this).data('mob');
                        $(this).css('background-image', 'url(' + dataImage + ')');
                    }

                })
            }
        },
        customDropdown: function () {
            $('.dropdown').dropdown();
        },
        dataTableLayout: function () {

            if ($("#ureachus_table").length) {
                $('#ureachus_table').DataTable( {
                    columnDefs: [ {
                        orderable: false,
                        className: 'select-checkbox',
                        targets:   0
                    } ],
                    select: {
                        style:    'os',
                        selector: 'td:first-child'
                    },
                    order: [[ 1, 'asc' ]]
                } );
             };

        },
        ureachusLineChartTop: function(){

            chartColor = "#c5c5c5";
            ctx = document.getElementById('ureachusLineChartTop').getContext("2d");
      
            gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);
      
            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, "rgba(50, 188, 155, 0.40)");

      
            myChart = new Chart(ctx, {
                type: 'line',
                responsive: false,
                data: {
                    labels: ["         Jan ", "  Fev  ", "  Mars  ", "  Avr  ", "  Mai  ", "  Juin  ", "  Juil  ", "  Août  ", "  Sept  ", "  Oct  ", "  Nov  ", " Dec         "],
                    datasets: [{
                        label: "",
                        borderColor: "#32BC9B",
                        pointBorderColor: "rgba(50, 188, 155, 0.5)",
                        pointBackgroundColor: "#32BC9B",
                        pointHoverBackgroundColor: 'rgb(50, 188, 155)',
                        pointHoverBorderColor: 'rgba(50, 188, 155,0.5)',
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 3,
                        hoverBackgroundColor: 'red',
                        hoverBorderColor: 'blue',
                        hoverBorderWidth : '3',
                        radius: 0,
                        pointRadius: 0,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: [280, 440, 300, 450, 530, 320, 380, 600, 400, 350, 300, 730],
                        
                    }]
                },
                options: {
                    
                    layout: {
                        padding: {
                            right:0
                        }
                    },
                    elements: {
                        point: {
                          radius: 1,
                          hoverRadius: 4,
                        },
                      },
                    showAllTooltips: true,
                    maintainAspectRatio: false,
                    responsive: true,
                    
                    tooltips: {
                        displayColors: false,
                        backgroundColor: '#fff',
                        titleFontColor: '#000000',
                        bodyFontColor: '#020A26',
                        bodySpacing: 0,
                        padding: 10,
                        fontSize: 1,
                        mode: "nearest",
                        intersect: 0,
                        position: "average",
                        fontFamily: "'Poppins'",
                        bodyFontStyle: "400",
                        
                        custom: function(tooltip) {
                            
                            if (!tooltip) return;
                            // disable displaying the color box;
                            tooltip.displayColors = false;
                          },
                          callbacks: {
                              
                            
                            // use label callback to return the desired label
                            label: function(tooltipItem, data) {

                              return tooltipItem.xLabel + " |   " + tooltipItem.yLabel + "€ ";
                              
                            },
                            // remove title
                            title: function(tooltipItem, data) {
                              return;
                            }
                          },
                         
                        
                    },
                    
                    hover: {
                        mode: 'index',
                        intersect: false          
                    },
                    legend: {
                        display: false,
                        
                        
                    },
                    scales: {
                        yAxes: [{
                            
                            display: false,
                            gridLines: {
                                display: false,
                                drawBorder: false, //<- set this
                                offsetGridLines: true
                             }
                        }],
                        xAxes: [{
                            beforeBuildTicks: function(axis) {
                                axis.margins.left = '0px';
                                axis.margins.right = '0px';
                            },
                            gridLines: {
                                zeroLineColor: "red",
                                display: false,
                                offsetGridLines: true,
                                drawBorder: false

                            },
                            ticks: {
                                beginAtZero:true,
                                fontColor: "#6F7484",
                                fontStyle: "400",
                                fontSize: 10,
                                fontFamily: "'Poppins'",
                            }
                        }]
                    }
                }
            });
            
        },
        ureachusLineChartBottom: function(){

            chartColor = "#c5c5c5";
            ctx = document.getElementById('ureachusLineChartBottom').getContext("2d");
      
            gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
            gradientStroke.addColorStop(0, '#80b6f4');
            gradientStroke.addColorStop(1, chartColor);
      
            gradientFill = ctx.createLinearGradient(0, 170, 0, 50);
            gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
            gradientFill.addColorStop(1, "rgba(2, 10, 38, 0.15)");
      
            myChart = new Chart(ctx, {
                type: 'line',
                responsive: true,
                data: {
                    labels: ["         Jan ", "  Fev  ", "  Mars  ", "  Avr  ", "  Mai  ", "  Juin  ", "  Juil  ", "  Août  ", "  Sept  ", "  Oct  ", "  Nov  ", " Dec         "],
                                       
                    datasets: [{
                        label: "",
                        borderColor: "#020A26",
                        pointBorderColor: "rgba(2, 10, 38, 0.5)",
                        pointBackgroundColor: "#020A26",
                        pointBorderWidth: 2,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 3,
                        hoverBackgroundColor: 'red',
                        hoverBorderColor: 'blue',
                        hoverBorderWidth : '3',
                        radius: 0,
                        pointRadius: 0,
                        fill: true,
                        backgroundColor: gradientFill,
                        borderWidth: 2,
                        data: [280, 440, 300, 450, 530, 320, 380, 600, 400, 350, 300, 700]
                        
                    }]
                },
                options: {
                   
                    elements: {
                        point: {
                          radius: 1,
                          hoverRadius: 4,
                        },
                      },
                    showAllTooltips: true,
                    maintainAspectRatio: false,
                    responsive: true,
                    
                    tooltips: {
                        displayColors: false,
                        backgroundColor: '#fff',
                        titleFontColor: '#000000',
                        bodyFontColor: '#020A26',
                        bodySpacing: 4,
                        xPadding: 12,
                        mode: "nearest",
                        intersect: 0,
                        position: "nearest",
                        fontFamily: "'Poppins'",
                        custom: function(tooltip) {
                            if (!tooltip) return;
                            // disable displaying the color box;
                            tooltip.displayColors = false;
                          },
                          callbacks: {
                            // use label callback to return the desired label
                            // label: function(tooltipItem, data) {
                            //     var textnode = " |  ";
                            //   return tooltipItem.xLabel + textnode + tooltipItem.yLabel + "€";
                            // },
                            label: function(tooltipItem, data) {
                                return tooltipItem.xLabel + " |   " + tooltipItem.yLabel + "€ ";
                                
                              },
                            // remove title
                            title: function(tooltipItem, data) {
                              return;
                            }
                          }
                        
                    },
                    
                    hover: {
                        mode: 'index',
                        intersect: false          
                    },
                    legend: {
                        display: false,
                        
                        
                    },
                    scales: {
                        yAxes: [{
                            display: false,
                            ticks: {
                                display: false,
                                beginAtZero: true,
                            },
                            gridLines: {
                                display: false,
                                 tickMarkLength: 0,
                            },
                            ticks: {
                                beginAtZero: true
                              }

                        }],
                        xAxes: [{
                            beforeBuildTicks: function(axis) {
                                axis.margins.left = '5px';
                                axis.margins.right = '5px';
                            },
                            gridLines: {
                                zeroLineColor: "red",
                                display: false,

                            },
                            ticks: {
                                fontColor: "#6F7484",
                                fontStyle: "400",
                                fontSize: 10,
                                fontFamily: "'Poppins'",
                                
                            }
                        }]
                    }
                }
            });
        },
        datePicker: function () {
            $( "#datepicker1" ).datepicker();
            $( "#datepicker2" ).datepicker();
            $( "#datepicker3" ).datepicker();
            $( "#datepicker4" ).datepicker();
            $( "#datepicker5" ).datepicker();
            $( "#datepicker6" ).datepicker();
            $( "#datepicker7" ).datepicker();
            $( "#datepicker8" ).datepicker();
        },
        radioButton: function () {
            $('.checkbox input').change(function () {
                // Remove all classes first
                $('.radio-inline.selected').removeClass('selected');
            
                // Add class to the closest element of the selected radio
                $('.checkbox input:checked').closest('.radio-inline')
                    .addClass('selected');
            }).trigger('change');
        },
        popupClick: function () {
          $(".popOne").click(function(){
              $("#popOne").show();
              $(".model-pop-observation .close").click(function(){
                  $(this).parent().parent().hide();
              })
          })
          $(".popTwo").click(function(){
            $("#popTwo").show();
            $(".model-pop-observation .close").click(function(){
                $(this).parent().parent().hide();
            })
        })
        },
      

        init: function () {
            metitoApp.backgroundImage();
            metitoApp.customDropdown();
            metitoApp.dataTableLayout();
            // metitoApp.ureachusLineChartTop();
            // metitoApp.ureachusLineChartBottom();
           
            metitoApp.radioButton();
            $('.evaluation .dropdown').dropdown({
                onChange: function(){}
            });
            metitoApp.datePicker();
            metitoApp.popupClick();
            
        }
    };
    window.metitoApp = metitoApp;
})(window, document, jQuery);

jQuery(document).ready(function () {
    metitoApp.init();
});

$(window).on("load",function(){
    $(".content").mCustomScrollbar();
    $(".listing-copy-scroller").mCustomScrollbar();
});