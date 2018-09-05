var animirano = false;

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {
        onOpenEnd: function () {
            document.querySelector("li.active").scrollIntoView({ behavior: "smooth" });
        }
    });

    var instances = M.Collapsible.init(elems, {
        onOpenEnd: function (el) {
            var sb = el.querySelectorAll(".skillsBox>.skill");

            if (sb.length > 0) {
                var i;
                for (i = 0; i < sb.length; i++) {
                    sb[i].children[0].classList.add("skill-anim");
                }
            }
        },

        onCloseEnd: function (el) {
            var sb = el.querySelectorAll(".skillsBox>.skill");

            if (sb.length > 0) {
                var i;
                for (i = 0; i < sb.length; i++) {
                    sb[i].children[0].classList.remove("skill-anim");
                }
            }
        }
    });

    animirajIliVrati();
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("person").addEventListener("click", animirajIliVrati);
});

function animirajIliVrati() {
    if (animirano) {
        document.querySelector("#anim").classList.remove("animacija");
    }
    else {
        document.querySelector("#anim").classList.add("animacija");
    }

    animirano = !animirano;
}

function downloadCV() {
    alert("CV se preuzima");
}