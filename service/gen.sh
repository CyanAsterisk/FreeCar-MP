function genProto {
    SERVICE=$1
    PROTO_PATH=./idl/${SERVICE}.proto

    PBTS_BIN_DIR=../node_modules/.bin
    PBTS_OUT_DIR=./gen/${SERVICE}
    mkdir -p $PBTS_OUT_DIR

    $PBTS_BIN_DIR/pbjs -t static -w es6 $PROTO_PATH --no-create --no-encode --no-decode --no-verify --no-delimited --force-number -o $PBTS_OUT_DIR/${SERVICE}_pb_tmp.js
    echo 'import * as $protobuf from "protobufjs";\n' > $PBTS_OUT_DIR/${SERVICE}_pb.js
    cat $PBTS_OUT_DIR/${SERVICE}_pb_tmp.js >> $PBTS_OUT_DIR/${SERVICE}_pb.js
    rm $PBTS_OUT_DIR/${SERVICE}_pb_tmp.js
    $PBTS_BIN_DIR/pbts -o $PBTS_OUT_DIR/${SERVICE}_pb.d.ts $PBTS_OUT_DIR/${SERVICE}_pb.js
}

genProto user
genProto trip
genProto car
genProto profile
genProto common