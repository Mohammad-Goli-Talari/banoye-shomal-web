// src/features/profile/hooks/use-change-password.ts

import { useMutation } from "@tanstack/react-query";

import { profileService } from "../services/profile-service";

import { appToast } from "@/lib/toast";

export function useChangePassword() {

    return useMutation({

        mutationFn:
            profileService.changePassword,

        onSuccess: () => {

            appToast.success(
                "رمز عبور با موفقیت تغییر کرد"
            );
        },
    });
}
