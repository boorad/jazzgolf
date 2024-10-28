import { polyfillGlobal } from "react-native/Libraries/Utilities/PolyfillFunctions";
// import "react-native-polyfill-globals/auto";

import { Buffer } from "buffer";
polyfillGlobal("Buffer", () => Buffer);

import { ReadableStream } from "readable-stream";
polyfillGlobal("ReadableStream", () => ReadableStream);

import "@azure/core-asynciterator-polyfill";

import "@bacons/text-decoder/install";

import 'react-native-get-random-values';
