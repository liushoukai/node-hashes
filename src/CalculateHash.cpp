/*
 ************************************************************************
 *                                                                      *
 *                    Hash Function Algorithms                          *       
 *                                                                      *
 * Author: liushoukai - 2015                                            *
 *                                                                      *
 * Thanks to Arash Partow who conributed to this implementation         *
 * http://www.partow.net/programming/hashfunctions/                     *
 *                                                                      *                                                                     *
 ************************************************************************
 */

#include <node.h>
#include <v8-util.h>
#include "GeneralHashFunctions.h"

using v8::FunctionCallbackInfo;
using v8::Isolate;
using v8::Local;
using v8::Object;
using v8::String;
using v8::Value;
using v8::StdPersistentValueMap;
using v8::Exception;

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

void init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "hash", GenHash);
}

NODE_MODULE(addon, init)
