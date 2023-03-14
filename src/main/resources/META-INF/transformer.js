
var Opcodes = Java.type("org.objectweb.asm.Opcodes");
var MethodInsnNode = Java.type("org.objectweb.asm.tree.MethodInsnNode");

function initializeCoreMod() {
    return {
        "FluffyDandelionFlowerBlock_func_180655_c": {
            "target": {
                "type": "METHOD",
                "class": "com/davigj/just_dandy/common/block/FluffyDandelionFlowerBlock",
                "methodName": "func_180655_c",
                "methodDesc": "(Lnet/minecraft/block/BlockState;Lnet/minecraft/world/World;Lnet/minecraft/util/math/BlockPos;Ljava/util/Random;)V"
            },
            "transformer": function (mn) {
                var insnList = mn.instructions.toArray();
                for (var i = 0; i < insnList.length; i++) {
                    var node = insnList[i];
                    if (node.getOpcode() === Opcodes.INVOKEVIRTUAL && node.owner.equals("net/minecraft/util/ResourceLocation") && node.name.equals("toString") && node.desc.equals("()Ljava/lang/String;")) {
                        mn.instructions.set(node, new MethodInsnNode(Opcodes.INVOKESTATIC, "java/lang/String", "valueOf", "(Ljava/lang/Object;)Ljava/lang/String;", false));
                    }
                }
                return mn;
            }
        }
    }
}