import Swal from "sweetalert2";
export default defineNuxtPlugin(()=>{
    return {
        provide: {
            showAlert: (icon: any, title: String) => {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });
                
                  Toast.fire({
                    icon: icon,
                    title: title,
                  });
            }
        }
    }
});

// const { $showAlert } = useNuxtApp();
// $showAlert('success','message')