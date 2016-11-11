var Jimp = require("jimp");

function spotDifferences() {
    var different = 0;
    Jimp.read("QAtest.jpg").then(function(image) {
        var grey = image.clone().greyscale();
        var result = new Jimp(843, 522, Jimp.rgbaToInt(255, 255, 0, 255), function(err, diff) {
            for (var y = 0; y < 522; y++) {
                for (var x = 0; x < 843; x++) {
                    var first = Jimp.intToRGBA(image.getPixelColor(x, y));
                    var second = Jimp.intToRGBA(image.getPixelColor(x, y + 588));
                    var per = {
                        r: (Math.abs(first.r - second.r) / 255) * 100,
                        g: (Math.abs(first.g - second.g) / 255) * 100,
                        b: (Math.abs(first.b - second.b) / 255) * 100,
                        a: (Math.abs(first.a - second.a) / 255) * 100
                    };
                    if ((per.r > 19) || (per.g > 14) || (per.b > 21)) {
                        different++;
                    } else {
                        diff.setPixelColor(grey.getPixelColor(x, y), x, y);
                    }
                }
            }
        });
        var percent_difference = (different / (522 * 843)) * 100;
        result.write("differences.jpg");
        console.log(percent_difference + " % difference between the two images");
    }).catch(function(err) {
        console.error(err);
    });
}

spotDifferences();
