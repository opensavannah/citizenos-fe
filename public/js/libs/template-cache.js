/** AUTOGENERATED BY GULP templatecache TASK **/ 

angular
    .module('citizenos')
    .run(['$log', '$http', '$templateCache', function ($log, $http, $templateCache) {
        var templates = [
            '/views/401.html',
            '/views/about.html',
            '/views/home.html',
            '/views/my.html',
            '/views/my_groups_groupId.html',
            '/views/my_topics_topicId.html',
            '/views/partners_consent.html',
            '/views/partners_login.html',
            '/views/topics_topicId.html',
            '/views/unknown_device.html',
            '/views/_templates/cos_input_test.html',
            '/views/_templates/groups.html',
            '/views/_templates/mytopics.html',
            '/views/_templates/mytopics_view.html',
            '/views/_templates/no_groups.html',
            '/views/_templates/no_topics.html',
            '/views/_templates/topics_topicId.html',
            '/views/directives/cos_modal.html',
            '/views/directives/cos_modal_datepicker.html',
            '/views/directives/date_picker.html',
            '/views/layouts/main.html',
            '/views/layouts/partner.html',
            '/views/default/nav.html',
            '/views/default/nav_mobile.html',
            '/views/default/search.html',
            '/views/modals/group_create_settings.html',
            '/views/modals/group_delete_confirm.html',
            '/views/modals/group_member_topic_delete_confirm.html',
            '/views/modals/group_member_user_delete_confirm.html',
            '/views/modals/group_member_user_leave_confirm.html',
            '/views/modals/login.html',
            '/views/modals/login_esteid.html',
            '/views/modals/login_smartid.html',
            '/views/modals/my_account.html',
            '/views/modals/password_forgot.html',
            '/views/modals/password_reset.html',
            '/views/modals/sign_up.html',
            '/views/modals/topic_attachment_delete_confirm.html',
            '/views/modals/topic_attachments.html',
            '/views/modals/topic_close_confirm.html',
            '/views/modals/topic_comment_moderate.html',
            '/views/modals/topic_comment_report.html',
            '/views/modals/topic_delete_comment.html',
            '/views/modals/topic_delete_confirm.html',
            '/views/modals/topic_event_delete_confirm.html',
            '/views/modals/topic_member_group_delete_confirm.html',
            '/views/modals/topic_member_user_delete_confirm.html',
            '/views/modals/topic_member_user_leave_confirm.html',
            '/views/modals/topic_send_to_followUp_confirm.html',
            '/views/modals/topic_send_to_vote_confirm.html',
            '/views/modals/topic_settings.html',
            '/views/modals/topic_vote_delegate.html',
            '/views/modals/topic_vote_revoke_delegation_confirm.html',
            '/views/modals/topic_vote_sign.html',
            '/views/_templates/modals/add_topics.html',
            '/views/_templates/modals/confirm.html',
            '/views/_templates/modals/date_picker.html',
            '/views/_templates/modals/delete_comment.html',
            '/views/_templates/modals/invite_users.html',
            '/views/_templates/modals/set_number.html',
            '/views/_templates/modals/topic_delete_confirm.html',
            '/views/_templates/modals/topic_settings.html',
            '/views/_templates/modals/topic_vote_sign.html',
        ];
        var i = 0;
        if (templates.length) {
            downloadToCache();
        }
        function downloadToCache() {
            var template = templates[i];
            $http
                .get(template, {
                    ignoreLoadingBar: true
                })
                .then(
                    function (response) {
                        $templateCache.put(response.config.url, response.data);
                        if (++i < templates.length) {
                            downloadToCache();
                        }
                    },
                    function (err) {
                        $log.error('error', err);
                        if (++i < templates.length) {
                            downloadToCache();
                        }
                    }
                );
        }
    }]);