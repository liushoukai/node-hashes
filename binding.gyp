{
    "targets": [
    	{
            "target_name": "nodehashes",
            "sources": [ "src/CalculateHash.cpp", "src/GeneralHashFunctions.cpp", "src/MurmurHash3.cpp" ],
            "include_dirs": [ "<!(node -e \"require('nan')\")" ]
    	}
    ]
}
