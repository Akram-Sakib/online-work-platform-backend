"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createSeller = zod_1.z.object({
    email: zod_1.z.string({
        required_error: 'Email is required',
    }),
    password: zod_1.z.string({
        required_error: 'Password is required',
    }),
    seller: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Seller name is required',
        }),
        dateOfBirth: zod_1.z.string({
            required_error: 'Date of birth is required',
        }).optional(),
        gender: zod_1.z.enum(['MALE', 'FEMALE'], {
            required_error: 'Gender is required',
        }).optional(),
        contactNo: zod_1.z.string({
            required_error: 'Contact number is required',
        }).optional(),
        occupation: zod_1.z.string({
            required_error: 'Occupation is required',
        }).optional(),
        bloodGroup: zod_1.z.string({
            required_error: 'Blood group is required',
        }).optional(),
        presentAddress: zod_1.z.string({
            required_error: 'Present address is required',
        }).optional(),
        permanentAddress: zod_1.z.string({
            required_error: 'Permanent address is required',
        }).optional(),
    }),
});
const createBuyer = zod_1.z.object({
    email: zod_1.z.string({
        required_error: 'Email is required',
    }),
    password: zod_1.z.string({
        required_error: 'Password is required',
    }),
    buyer: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Buyer name is required',
        }),
        dateOfBirth: zod_1.z.string({
            required_error: 'Date of birth is required',
        }),
        gender: zod_1.z.enum(['MALE', 'FEMALE'], {
            required_error: 'Gender is required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact number is required',
        }),
        occupation: zod_1.z.string({
            required_error: 'Occupation is required',
        }),
        bloodGroup: zod_1.z.string({
            required_error: 'Blood group is required',
        }),
        presentAddress: zod_1.z.string({
            required_error: 'Present address is required',
        }),
        permanentAddress: zod_1.z.string({
            required_error: 'Permanent address is required',
        }),
    }),
});
const createAdmin = zod_1.z.object({
    email: zod_1.z.string({
        required_error: 'Email is required',
    }),
    password: zod_1.z.string({
        required_error: 'Password is required',
    }),
    admin: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'Buyer name is required',
        }),
        dateOfBirth: zod_1.z.string({
            required_error: 'Date of birth is required',
        }),
        gender: zod_1.z.enum(['MALE', 'FEMALE'], {
            required_error: 'Gender is required',
        }),
        contactNo: zod_1.z.string({
            required_error: 'Contact number is required',
        }),
        occupation: zod_1.z.string({
            required_error: 'Occupation is required',
        }),
        designation: zod_1.z.string({
            required_error: 'Designation is required',
        }),
        bloodGroup: zod_1.z.string({
            required_error: 'Blood group is required',
        }),
        presentAddress: zod_1.z.string({
            required_error: 'Present address is required',
        }),
        permanentAddress: zod_1.z.string({
            required_error: 'Permanent address is required',
        }),
    }),
});
exports.UserValidation = { createSeller, createBuyer, createAdmin };
