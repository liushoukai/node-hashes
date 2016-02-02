/*
 ************************************************************************
 *                                                                      *
 *                    Hash Function Algorithms                          *
 *                                                                      *
 * Copyright(c) 2015-2016 liushoukai <kay21156929@gmail.com>
 * MIT Licensed
 *                                                                      *
 * Thanks to Arash Partow who conributed to this implementation         *
 * http://www.partow.net/programming/hashfunctions/                     *
 *                                                                      *                                                                     *
 ************************************************************************
 */

#include <node.h>
#include <iostream>
#include <v8-util.h>
#include <nan.h>
#include "GeneralHashFunctions.h"
#include "MurmurHash3.h"

using namespace v8;
using namespace std;

void GenHash(const FunctionCallbackInfo<Value>& args) {

    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 2) {
        isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong number of arguments")));
        return;
    }

    String::Utf8Value v8_algorithm_type(args[0]->ToString());
    String::Utf8Value v8_string(args[1]->ToString());

    std::string algorithm_type = std::string(*v8_algorithm_type);

    unsigned int hash = 0;

    if (algorithm_type == "RSHash") {
        hash = RSHash(*v8_string);
    } else if (algorithm_type == "JSHash") {
        hash = JSHash(*v8_string);
    } else if (algorithm_type == "PJWHash") {
        hash = PJWHash(*v8_string);
    } else if (algorithm_type == "ELFHash") {
        hash = ELFHash(*v8_string);
    } else if (algorithm_type == "BKDRHash") {
        hash = BKDRHash(*v8_string);
    } else if (algorithm_type == "SDBMHash") {
        hash = SDBMHash(*v8_string);
    } else if (algorithm_type == "DJBHash") {
        hash = DJBHash(*v8_string);
    } else if (algorithm_type == "DEKHash") {
        hash = DEKHash(*v8_string);
    } else if (algorithm_type == "BPHash") {
        hash = BPHash(*v8_string);
    } else if (algorithm_type == "FNVHash") {
        hash = FNVHash(*v8_string);
    } else if (algorithm_type == "APHash") {
        hash = APHash(*v8_string);
    } else {
        isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Unkonwn algorithm type")));
        return;
    }

    args.GetReturnValue().Set(hash);

}

void MurmurHash(const FunctionCallbackInfo<Value>& args) {

    Isolate* isolate = args.GetIsolate();

    if (args.Length() < 2) {
        isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Wrong number of arguments")));
        return;
    }

    String::Utf8Value v8_algorithm_type(args[0]->ToString());
    String::Utf8Value v8_string(args[1]->ToString());
    uint32_t tmp = args[2]->ToUint32()->Value();

    std::string algorithm_type = std::string(*v8_algorithm_type);

    uint32_t seed = tmp > 0 ? tmp : 42;
    uint32_t hash[4];

    if (algorithm_type == "MurmurHash3_x86_32") {
        MurmurHash3_x86_32(*v8_string, strlen(*v8_string), seed, hash);
        args.GetReturnValue().Set(hash[0]);
    } else if (algorithm_type == "MurmurHash3_x86_128") {
        MurmurHash3_x86_128(*v8_string, strlen(*v8_string), seed, hash);
        Local<Array> values = Nan::New<Array>(4);
        for (int i=0; i<4; i++) {
            values->Set(Nan::New<Integer>(i), Nan::New<Uint32>(hash[i]));
        }
        Local<Value> ret = values;
        args.GetReturnValue().Set(ret);
    } else {
        isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "Unkonwn algorithm type")));
        return;
    }

}

void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "hash", GenHash);
    NODE_SET_METHOD(exports, "murmurhash", MurmurHash);
}

NODE_MODULE(addon, init)
