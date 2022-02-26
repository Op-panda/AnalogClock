setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = (htime * 30) + (mtime * 0.5);
    mrotation = (mtime * 6);
    srotation = (stime * 6);

    hour.style.transform = "rotate(" + hrotation + "deg)";
    minute.style.transform = "rotate(" + mrotation + "deg)";
    second.style.transform = "rotate(" + srotation + "deg)";
}, 1000);