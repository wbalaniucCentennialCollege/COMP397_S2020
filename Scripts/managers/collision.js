var managers;
(function (managers) {
    var Collision = (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            // Create a temp Vec2 object for each object passed in.
            var P1 = new math.Vec2(obj1.x, obj1.y);
            var P2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(P1, P2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    // A collision has occurred
                    obj2.isColliding = true;
                    return true;
                }
                else {
                    obj2.isColliding = false;
                    return false;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map